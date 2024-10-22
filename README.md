# fall-2024-website

Official CS128 Honors Website: [honors.cs128.org/](https://honors.cs128.org/)

Updated website written in Angular

## Getting Started

Install [Angular CLI](https://cli.angular.io/) using `npm` package manager:

```bash
npm install -g @angular/cli
```

Download dependencies:

```bash
npm install
```

Run the development server:

```bash
cd frontend
ng serve
```

## Updating the Lectures:

1. Navigate to `official-website/frontend/src/assets/` directory
2. Edit the `lectures.json` file
3. Deploy

## Deployment

We now deploy the site on GitHub Pages, use the following command:

```bash
cd frontend
ng deploy --cname=honors.cs128.org --repo=https://github.com/cs196illinois/CS128H-Frontend.git
```

### Old Deployment:

To deploy on the server, get access to the `cs196.cs.illinois.edu` Ubuntu server. SSH into `<NetID>@cs196.cs.illinois.edu` (Note that you need to be connected to IllinoisNet or VPN).

The website is deployed using `Apache2 HTTP Server`on the Ubuntu 16.0.4 server. Do the following steps:

1. Run `git pull` for the latest changes made locally or just edit the files here on the server.
2. Run `sudo ./deploy`. Check website to make sure changes are live (may take a few seconds)

Website SSL Certificate is managed by [LetsEncrypt](https://certbot.eff.org/lets-encrypt/ubuntuxenial-apache).

If the deployment script does not work, do the following:

1. Run `git pull` for the latest changes
2. Run `ng build --prod` in the frontend directory. This will produce a production build of the website in the `./dist` directory.
3. Copy all the files within `./dist/website2020` and paste them into `/var/www/html`. Delete everything in `/var/www/html` except the `.htaccess` file
4. Restart the apache server: `sudo service apache2 restart`

### Notes:

If non home urls aren't working (e.g. cs196.cs.illinois.edu/staff or cs196.cs.illinois.edu/resources): [solution](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)

Install [Ranger](https://github.com/ranger/ranger) for fast terminal navigation: `pip install ranger-fm`. This may be helpful copying and pasting multiple files
