from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

import requests
from requests.auth import HTTPBasicAuth
from bs4 import BeautifulSoup
import mysql.connector


# Optional: Set Chrome to run in headless mode (without opening the browser window)
chrome_options = Options()
chrome_options.headless = False  # Set to False if you want to see the browser

# Path of ChromeDriver executable 
driver_path = 'C:/wamp64/www/furniturevault_upgrade/3_scraper/chromedriver/chromedriver-win64/chromedriver.exe'

# Set up the Selenium WebDriver
# driver = webdriver.Chrome(executable_path=driver_path, options=chrome_options)

# Set up the Service object to specify the ChromeDriver path
service = Service(executable_path=driver_path)

# Set up the WebDriver using the Service object and options
driver = webdriver.Chrome(service=service, options=chrome_options)




# Step 1: Scrape data from the public website
url = 'https://3dsky.org'  # Public website you want to scrape

# Open the URL
driver.get(url)

# Wait for the page to load completely (adjust the wait time as needed)
driver.implicitly_wait(60)  # Waits for 5 seconds

# Now that the page has loaded, you can retrieve the page source (HTML content)
html_content = driver.page_source

# Print the HTML content to check if it has loaded correctly
print(html_content)

# Don't forget to close the WebDriver when done
driver.quit()

# # Replace with your actual username and password
# username = 'rifat23'
# email = 'rifat.arefin@brainstation-23.com'
# password = 'Rifatbs23'

# # Send GET request with Basic Authentication
# response = requests.get(url, auth=HTTPBasicAuth(email, password))
# # response = requests.get(url, auth=HTTPBasicAuth(username, password))

# if response.status_code == 200:
#     print("Successfully accessed")
#     # Parse the page content with BeautifulSoup
#     soup = BeautifulSoup(response.text, 'html.parser')
#     print(soup)
#     # title = soup.find_all('a')
#     # print(title)
#     # # Example: Find all articles with a specific class (adjust the class/tag as per the website structure)
#     # articles = soup.find_all('div', class_='article')  # Update with the correct tag/class

#     # # Extract data from each article (e.g., title, summary, and URL)
#     # scraped_data = []
#     # for article in articles:
#     #     title = article.find('h2').get_text()  # Adjust the tag as per the website structure
#     #     summary = article.find('p').get_text()  # Adjust the tag as per the website structure
#     #     article_url = article.find('a')['href']  # Adjust to grab the correct URL
#     #     scraped_data.append((title, summary, article_url))

#     # # Step 2: Store the scraped data in your local MySQL database
#     # try:
#     #     # Connect to your local MySQL database
#     #     conn = mysql.connector.connect(
#     #         host="localhost",
#     #         user="root",  # Change if needed
#     #         password="",  # Add your password if any
#     #         database="your_database_name"  # Your MySQL database
#     #     )
#     #     cursor = conn.cursor()

#     #     # Example query to insert data into a table (adjust as needed)
#     #     query = "INSERT INTO articles (title, summary, url) VALUES (%s, %s, %s)"

#     #     # Insert scraped data into the database
#     #     cursor.executemany(query, scraped_data)
#     #     conn.commit()  # Commit the transaction

#     #     print(f"{cursor.rowcount} records inserted successfully.")

#     # except mysql.connector.Error as err:
#     #     print(f"Error: {err}")
#     # finally:
#     #     if conn.is_connected():
#     #         cursor.close()
#     #         conn.close()

# else:
#     print(f"Failed to retrieve the page. Status code: {response.status_code}")
