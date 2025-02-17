FROM php:apache

# Install MySQLi extension
RUN docker-php-ext-install mysqli

# Enable mod_rewrite for Apache (optional but useful)
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy existing project files
COPY . /var/www/html
