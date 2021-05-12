THIS IS THE INSTALL FILE, WHERE ALL THE STEPS TO THE PROJECT WILL BE STATED.

--------------------------------------------------------------------------------------------------
Exercise for laboratory 12

My name is Ali Zoubeidi and I created this file to wirte 1 or two sentences. I am now going to push the repository so Jeremie can pull.

My name is Jeremie Guerchon and I pulled this file and now editing it with 1 or two sentences. I am now going to push the changes to this file so that Bincent Benesen can pull.

My name is Vincent Bryant Benesen and I'm the last who pulled this file and now I'm editing it with 1 or 2 sentences. I'll push the changes to this file.

Ali pushed this file with some edits but I did not pull it. Trying to create a conlfict.

Hi this is Ali and doing changes in this file for the conflicts part of laboratory 12.

-------------------------------------------------------------------------------------------------
ACTUAL START OF THE INSTALL.md file

The first installation we did in this project is installing our own vps. We got our VPS from Digital Ocean for 5$ a month.

STEPS FOR SETTING UP OUR VPS:

1. Creating an account on Digital Ocean by linking Jeremie's Google account.
2. After Creating an account, we needed to choose from different pricing options. The pricing options are range from 5$ up to 80$ a month. We chosed the cheapest one which is the 5$. 
3. Done! We created our server.
4. After creating our server, we need to test it by inserting our projects.
5. In order to that, we need to type the command [ssh-keygen]. This command will allow us to generate a key so that we can enter the vps in the console.
6. To view the key, type the command cat[the place where you put you vps key]. For Example, [cat /home/jeremie/.ssh/new_vps.pub].
7. We need to create our web server by installing Nginx.
8. Finally, We are done setting up our VPS
-------------------------------------------------------------------------------------------------
The second installation that we did in this project is installing Jekyll. Jekyll is a site generator that will help you build your own website without using any HTML, Css, Javascript and JQuery.

STEPS FOR GENERATING A WEBSITE USING JEKYLL:

1. We need to download the Jekyll package on our computer by simply typing the command:
 	sudo apt-get install ruby-full build-essential zlib1g-dev
	echo '# Installing Ruby Gems to ~/gems' >> ~/.bashrc
	echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
	echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
	source ~/.bashrc
2. After installing the package, we need to install the jekyll bundler. This bundler is a great tool for jekyll because it allow us to run different versions of Jekyll. To install this bundler, type the command:
 [gem install jekyll bundler].
3. Now we finished installing all the tool we need, it is time for us to generate our website.
4. To generate a website, type the command [jekyll new nameofthefile]. this command will generate a website for you.
5. To make changes on your website, open the GEMFILE on any text editor. 
6. Finally, we generated a website.
-------------------------------------------------------------------------------------------------
In this project, we also implemented HTML, CSS, Javascript and JQuery. We used this 4 languages in order to design our own website. 

