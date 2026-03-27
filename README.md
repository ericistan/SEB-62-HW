# Using GitHub Desktop to submit labs/homework

# Setting up git repository

## 1. Login

1a. Open your GitHub Desktop and log in to your Git Enterprise Account (`https://github.com`).

## 2. Forking

2a. Go to `https://github.com/ga-singapore/SEB-XX-HW` (where XX is the class number). <br>
2b. Click the `Fork` button at the top right hand corner (see below). This will create a fork of the repository on your account on Enterprise git.

<img src="https://i.imgur.com/Km3GkF7.jpg" />

2c. Click on `Code` and select `Open with GitHub Desktop` (see below).

<img src="https://i.imgur.com/N7GD1mp.jpg" />

## 3. Clone to Local Computer

3a. Check the `Local Path` is where you want to clone the repository (highlighted in yellow below). If not use `Choose` to select a directory.

<img src="https://i.imgur.com/MHoQ41R.jpg" />

3b. Click `Clone`.<br />
3c. A popup message will appear.

<img src="https://i.imgur.com/ceyBPGB.jpg" />

3d. Click `Contribute to parent project` (as above).<br />
3e. Click `Continue`.

The repository will be created in the directory in which you specified in 3a.

Your homework repository is now setup for you to code in.

# Doing and submitting your homework

## 4. Create Your Homework Directory

4a. Go to the directory you cloned your repository into under local path from 3a.<br />
4b. Go to the the `unit + homework name` in which you'll be doing.<br />
4c. Create a directory of your name in the `unit + homework name` directory. This new directory should be on the same level as the `EMPTY.md`<br />

In the example below, `homework` is the cloned repository. `u1/hw1` is the directory you are going to create your directory. `your-name` is the directory which you will create with your name - DO NOT call the directory `your-name`. This `your-name` directory is where you'll put all your homework codes. Nothing should be placed outside `your-name` directory (highlighted in red below).

<img src="https://i.imgur.com/T56e7OW.jpg" height="200" />

## 5. Do your homework in the directory created in 4c

## 6. Commit

6a. Git will detect a file change in your local repository. In GitHub Desktop you'll see the changes in the `Changes` tab (highlighted in yellow below).

<img src="https://i.imgur.com/a6Yrw57.jpg" />

6b. Type in the commit message (highlighted in red above). This message should describe what changes or feature you have made, e.g. Created function to connect to database. If there is no commit message the `Commit to main` will NOT be clickable.<br />
6c. Click `Commit to main`.<br />

The changes are now registered in your LOCAL git. Note: it is your local computer git only.

## 7. Push

This process is to "copy" the changes from your local git to your account on the Enterprise git

7a. After committing, the screen will change to:

<img src="https://i.imgur.com/raQG3iD.jpg" />

7b. Click on either `Push origin` at the top or the one in the body of the app (both highlighted in read above). This will change the repository on your account on Enterprise git.<br />

Note: you DO NOT need to push with every commit. You can commit a lot of features before pushing.

## 8. Create Pull-Request

To request to copy changes in your repository in your account on Enterprise git to the class homework repository (this is the repository we forked/cloned in 2 and 3).

8a. Go to the GitHub Desktop menu bar and select `Branch` then click `Create Pull Request`.

<img src="https://i.imgur.com/JiFuNhL.jpg" />

8b. You will be brought to the Enterprise git webpage.

<img src="https://i.imgur.com/K3e5fV5.jpg" />

8c. Check the arrow is in the correct direction, it should point from your Enterprise git account to the class homework (see yellow box above).<br />
8d. Click `Create pull request` and the webpage will change.

<image src="https://i.imgur.com/ZscB5yN.jpg" />
  
  8e. The text in the yellow box should be the last commit comment that you made. You MAY change it to who is submitting this homework, e.g. Daisy's u1d1 homework (or something like that).<br />
  
  8f. Click `Create pull request`.<br />

You have now submitted your homework.

## 9. Pull Changes to Local Git

After everyone's homework has been merged with the homework git, you can get them by doing a pull request.

9a. Click `Fetch origin`.

<img src="https://i.imgur.com/q3HuAGB.jpg" />

9b. Click `Current Branch` and at the bottom of the popup `Choose a branch to merge into main` (below highlighted in red).

<img src="https://i.imgur.com/1NudtPe.jpg" />

9c. Choose `upstream/main` and click `Create a merge commit`.

<img src="https://i.imgur.com/XJi5lpG.jpg" />

9e. The main screen will be shown after the merge.

<img src="https://i.imgur.com/raQG3iD.jpg" />

9f. Click `Push origin` again to update the homework git on your account on Enterprise git.

Now all of the 3 repositories (local, your account on Enterprise git and homework on Enterprise git) are all synced.
