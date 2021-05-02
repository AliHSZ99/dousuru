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

Dependcies to be installed to build Jekyll projects:
Write these commands in the command line
	sudo apt-get install ruby-full build-essential zlib1g-dev
	echo '# Installing Ruby Gems to ~/gems' >> ~/.bashrc
	echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
	echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
	source ~/.bashrc
	gem install jekyll bundler
