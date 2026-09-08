# portfolio-website

## VPS deployment guide
Assumption: Ubuntu 22.04/24.04 VPS and domain `danang-dev.my.id`.

### 1. Configure DNS
Create an `A` record:

```text
danang-dev.my.id → 43.133.140.34
```

Wait until this resolves:

```bash
dig +short danang-dev.my.id
```

### 2. Prepare the VPS
Connect:

```bash
ssh ubuntu@43.133.140.34
password: mountain-55%-galaxy
```

Update and install base packages:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y ca-certificates curl git nginx certbot python3-certbot-nginx
```

Open firewall ports:

```bash
sudo ufw allow OpenSSH
sudo ufw allow "Nginx Full"
sudo ufw enable
```

Also allow TCP ports `80` and `443` in your VPS provider firewall.

### 3. Install Docker
```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

Log out and reconnect, then verify:

```bash
docker --version
docker run --rm hello-world
```

### 4. Upload or clone the project
Recommended: use Git.

```bash
sudo mkdir portfolio-website
sudo chown -R $USER:$USER portfolio-website
git clone https://github.com/dananggadii/portfolio-website.git portfolio-website
cd portfolio-website
```

For a private repository, configure a deploy key on the VPS. Do not place GitHub tokens in the Dockerfile.

### 5. Build and run the production container
```bash
cd portfolio-website
sudo docker build -t danang-portfolio:v1 .
```

```bash
docker run -d \
  --name danang-portfolio \
  --restart unless-stopped \
  --publish 127.0.0.1:3000:3000 \
  danang-portfolio:v1
```

Verify the app locally on the VPS:

```bash
docker ps
docker logs --tail 100 danang-portfolio
curl -I http://127.0.0.1:3000
```

Keep port `3000` bound to `127.0.0.1`; Nginx will be the only public entry point.

### 6. Configure Nginx reverse proxy
Create the site config:

```bash
sudo nano /etc/nginx/sites-available/danang-dev.my.id
```

Paste:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name danang-dev.my.id;

    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header X-Frame-Options "DENY" always;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/danang-dev.my.id /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. Enable HTTPS
```bash
sudo certbot --nginx \
  -d danang-dev.my.id \
  --redirect \
  --agree-tos \
  -m danangadi2005@gmail.com \
  --no-eff-email
```

Verify renewal:

```bash
sudo certbot renew --dry-run
```

### 8. Production smoke test
```bash
curl -I https://danang-dev.my.id
curl -I https://danang-dev.my.id/robots.txt
curl -I https://danang-dev.my.id/sitemap.xml
curl -I https://danang-dev.my.id/opengraph-image
curl -I "https://danang-dev.my.id/assets/hero/cv/cv%232.docx.pdf"
```

Also manually test navigation, CV download, certification links, mobile rendering, and social-share preview.

### Updating later
```bash
cd portfolio/portfolio-website
git pull --ff-only
docker build -t danang-portfolio:v5 .
docker stop danang-portfolio
docker rm danang-portfolio
```

```bash
docker run -d \
  --name danang-portfolio \
  --restart unless-stopped \
  --publish 127.0.0.1:3000:3000 \
  danang-portfolio:v5
```

Finally:

```bash
docker logs --tail 100 danang-portfolio
```