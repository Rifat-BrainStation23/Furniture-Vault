from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import requests
from requests.auth import HTTPBasicAuth
from bs4 import BeautifulSoup
import mysql.connector


"""
setup selenium
"""
# Optional: Set Chrome to run in headless mode (without opening the browser window)
chrome_options = Options()
chrome_options.headless = False  # Set to False if you want to see the browser

# Path of ChromeDriver executable 
driver_path = 'C:/wamp64/www/furniturevault_upgrade/3_scraper/chromedriver/chromedriver-win64/chromedriver.exe'

# Set up the Service object to specify the ChromeDriver path
service = Service(executable_path=driver_path)

# Set up the WebDriver using the Service object and options
driver = webdriver.Chrome(service=service, options=chrome_options)

"""
login
"""
# Go to the login page
login_url = 'https://3dsky.org/auth/login'
driver.get(login_url)

# Wait for the email input field to be present
WebDriverWait(driver, 60).until(
    EC.presence_of_element_located((By.ID, 'inputEmail'))  # Use the ID of the input field
)

# Find the email input field and enter the email address
email_field = driver.find_element(By.ID, 'inputEmail')  # actual name or ID of the email field
email_field.send_keys('rifat.arefin@brainstation-23.com') # actual email

# Wait for the password field to be present
WebDriverWait(driver, 60).until(
    EC.presence_of_element_located((By.ID, 'inputPassword'))  # Use the name or other locator for the password field
)

# Find the password input field and enter the password
password_field = driver.find_element(By.ID, 'inputPassword')  # actual name or ID of the password field
password_field.send_keys('*Rifatbs23#') #actual password

# Step 3: Locate the login button by class or text and click it
try:
    # Try to locate by class
    login_button = driver.find_element(By.CLASS_NAME, 'sky-btn.sky-btn-std')
    login_button.click()
except:
    # Fallback: Try to locate by button text
    login_button = driver.find_element(By.XPATH, "//button[text()=' Sign In ']")
    login_button.click()

# Wait for the login to be successful and the next page to load
try:
    WebDriverWait(driver, 60).until(
        EC.presence_of_element_located((By.LINK_TEXT, "New 3D models"))
    )

    print("***Login successful!***")

except Exception as e:
    print("***Login failed or timeout occurred:***", e)

"""
Open the url
"""
# Step 1: Scrape data from the public website
url = 'https://3dsky.org'

# Open the URL
driver.get(url)

# Wait for the page to load completely in second
driver.implicitly_wait(60)  

# Now that the page has loaded, you can retrieve the page source (HTML content)
html_content = driver.page_source

# Print the HTML content to check if it has loaded correctly
print(html_content)

# Don't forget to close the WebDriver when done
# driver.quit()

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
