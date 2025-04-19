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

# 💡 Tips for Writing Commit Messages:

1.check the docker images that are currently running
docker images

2.To display the running docker containers
docker ps

3.To display all the docker containers
docker ps -a

4.To create a new docker image with a specific name
docker build -t create-name . 

5.To create a new docker image with a specific name and version
docker build -t create-name:v1 . 

6.To run a docker image in a container
docker run -p (random port 8080):(EXPOSE 8000) image-name

7.To run a docker image in an interactive terminal with a specific container ID
docker run -it 4d722a10e4b3 

8.To stop a running docker container
docker container stop 6412c863db20

9.To start a stopped docker container
docker container start 6412c863db20

10.To remove a docker image
docker rmi image-name

11.To remove a specific docker image
docker rmi node-app:v1

12.To remove a docker container
docker rm container-id 

13.To list all the docker images
docker image ls

14.To list all the docker containers
docker container ls

15.To list all the docker containers including stopped ones
docker container ls -a
