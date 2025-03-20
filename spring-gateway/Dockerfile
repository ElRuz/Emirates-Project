# Use an official OpenJDK image as a base
FROM openjdk:17-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/springgateway-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8080 to allow external access
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
