# fall-2020-website

Official CS196 Website: [cs196.cs.illinois.edu](http://cs196.cs.illinois.edu)

Updated website written in Angular

## Deployment

To deploy on the server, get access to the `cs196.cs.illinois.edu` Ubuntu server. SSH into `<NetID>@cs196.cs.illinois.edu` (Note that you need to be connected to IllinoisNet or VPN).

The website is deployed using `Apache2 HTTP Server`on the Ubuntu server. Do the following steps:

1. Run `git pull` for the latest changes 
2. Run `./deploy`. Check website to make sure changes are live (may take a few seconds).

### Old Deployment:

If the deployment script does not work, do the following:
1. Run `git pull` for the latest changes
2. Run `ng build --prod` in the frontend directory. This will produce a production build of the website in the `./dist` directory.
3. Copy all the files within `./dist/website2020` and paste them into `/var/www/html`. Delete everything in `/var/www/html` except the `.htaccess` file
4. Restart the apache server: `sudo service apache2 restart`

### Notes:
If non home urls aren't working (e.g. cs196.cs.illinois.edu/staff or cs196.cs.illinois.edu/resources): [solution](https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2)

Install [Ranger](https://github.com/ranger/ranger) for fast terminal navigation: `pip install ranger-fm`. This may be helpful copying and pasting multiple files

