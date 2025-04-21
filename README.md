🚀 Git Tips for Developers!
Just learned how to write professional commit messages for GitHub! 📝
Commit messages are like the breadcrumbs of your coding journey. They help you and your team navigate through changes, understand the context, and maintain a clean and readable version control history.

Here are some key tips:
Keep it short and clear: Aim for 50 characters or less.
Use imperative mood: "Fix bug" instead of "Fixes bug".
Be descriptive: Avoid vague terms like "Update".
Include relevant info: Mention issue numbers and branch names.
Consistent formatting: Stick to a standard format.

Examples:

1. Fixing a Bug:
   fix(auth): fix login issue #123
   Fix the login issue by updating the authentication logic.

2. Adding a Feature:
   feat(ui): add new user profile page
   Add a new user profile page with user details and settings.

3. Documentation Update:
   docs(readme): update README with new installation instructions
   Update the README file to include new installation instructions.

4. Refactoring Code:
   refactor(auth): refactor authentication module
   Refactor the authentication module to improve code readability and maintainability.

5. Performance Optimization:
   perf(api): optimize API response time
   Optimize the API response time by implementing caching and reducing database queries.

6. Testing:
   test(auth): add unit tests for authentication module
   Add unit tests for the authentication module to ensure its functionality.

7. Chores:
   chore(deps): update dependencies to latest versions
   Update all project dependencies to their latest versions to ensure compatibility and security.

#💡 Tips for Writing Commit Messages:

1. Check the docker images that are currently running
docker images

2. Display the running docker containers
docker ps

3. Display all the docker containers
docker ps -a

4. Create a new docker image with a specific name
docker build -t create-name . 

5. Create a new docker image with a specific name and version
docker build -t create-name:v1 . 

6. Run a docker image in an interactive terminal with a specific container ID
docker run -it 4d722a10e4b3 

7. Run a docker image in a container
docker run -p (custom port 8080):(EXPOSE 8000) image-name

8. Run the docker image in a container with (--rm) to automatically remove the container when it exits.
docker run -p 8005:8000 --rm app-node:v1

9. Run the docker image in a container with (--name) to give a custom name to the container.(BEST PRACTICE)
docker run -p 8555:8000 --name node-one --rm nodes:v1

10. Stop a running docker container
docker container stop 6412c863db20

11. Start a stopped docker container
docker container start 6412c863db20

12. Remove a docker image
docker rmi image-name

13. Remove a specific docker image
docker rmi node-app:v1

14. Remove a docker container
docker rm container-id 

15. Display list of all the docker images
docker image ls

16. Display the running docker containers
docker container ls

17. Display the running docker containers with hidden containers
docker container ls -a

18. This command removes all stopped containers — it won’t touch running ones.
docker container prune -f

19. This command removes all unused images — it won’t touch running ones.
docker image prune -a

20. Run a docker image in a detached terminal with a specific image 
docker run -p 8004:8000 --name container --rm -v "/c/Users/nazim/Desktop/Fix-JS-Problems:/app" image-name:v1
