# Furniture Vault

# Setup The Project
- Keep this repository at the `./www` directory of the local server e.g. wamp.
- Start the server and open **phpmyadmin**
- Create a database named `furniturevault` using **phpmyadmin**
- Import the `./database/furniturevault.sql` sql file to the `furniturevault` using **phpmyadmin**
- Run `localhost/furniturevault/` from your browser


# Scraper Details
- Send Requests to the Public Site (e.g., https://www.example.com/).
- Scrape the Data, we'll use `BeautifulSoup` to parse the HTML and extract the data we need.
- Store Data in the local Database, After scraping, we'll connect to our local `MySQL` database (where our website's data is stored) and insert the scraped data.


### Install Dependencies: 
Install `beautifulsoup4` for data scraping, `requests` for making HTTP request, `mysql-connector` to connect MySQL database.
```bash
pip install beautifulsoup4 requests mysql-connector
```


# Configure The Script into New Server 
For windows,
- Make sure you have installed python in your local PC
- Create virtual environment `env` to the `./3_scraper/` directory
```bash
python3 -m venv env
```
- Activate the virtaul environment
```bash
source env/Scripts/activate
```
- Run `requirements.txt` file
```bash
pip install -r requirements.txt
```
- To deactivate the virtual environment, run the following command:
```bash
deactivate
```


# Run the script
- Ensure that the `WAMP Server` is Running
- Activate the virtual environment from terminal
- Run the scraper python script