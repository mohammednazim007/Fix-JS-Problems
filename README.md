<!-- github command -->

1. Add a new file to the repository
   git add .

2. Commit the changes with a descriptive commit message
   git commit -m "fix: fix login issue ###123"

3. Push the changes to the remote repository
   git push origin main

4. Create a new branch
   git checkout -b new-branch

5. Switch to an existing branch
   git checkout branch-name

6. Merge changes from a branch into the current branch
   git merge branch-name

7. Delete a branch
   git branch -d branch-name

8. List all branches
   git branch -a

9. Delete a remote branch
   git -d branch-name

10. Checkout a remote branch
    git checkout branch-name

11. Push a local branch to a remote repository
    git push --set-upstream origin branch-name

12. Pull changes from a remote repository
    git pull origin branch-name

13. Delete a remote branch permanently (never access able )
    git push origin -d branch-name

14. Check the differences between the current branch and the committed changes
    git reflog

15. Check the differences between the current branch and the committed changes
    git log --oneline

16. We can move one branch to another branch without pushing the changes to the remote repository. (temporary stash save)
    git stash

17. Check the stash list to see the stashed changes
    git stash list

18. Show the stashed changes in the stash list
    git stash show -p

19. Get back to the last version of temporary stashed changes
    git stash pop
