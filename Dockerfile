# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16.10.0 as build
# RUN npm -v
# RUN node -v
# ENV HTTP_PROXY="http://dev:devdev@192.168.100.1:3128"
# ENV HTTPS_PROXY="http://dev:devdev@192.168.100.1:3128"
# Set the working directory
WORKDIR /usr/local/qa-assist

# Add the source code to app


RUN npm config set registry http://registry.npmjs.org/
# Install all the dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm ci

COPY ./ /usr/local/qa-assist/
# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/qa-assist/dist/qa-assist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80

