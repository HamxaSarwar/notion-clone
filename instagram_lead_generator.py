"""
Instagram Lead Generator

This script uses the Tavily API to find Instagram accounts based on a given niche, location, and desired number of accounts.
It prompts the user for input, searches for relevant accounts, and optionally saves the results to a file.

Usage:
    Run the script and follow the prompts to enter a niche, location, and number of accounts.
    The script will display found Instagram accounts and offer to save the results.

Requirements:
    - Tavily API key
    - tavily-python library
"""

import os
from tavily import TavilyClient

try:
    # Set up Tavily API key
    tavily_api_key = "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"
    tavily_client = TavilyClient(api_key=tavily_api_key)

    # User input
    niche = input("Enter the niche for Instagram accounts: ").strip()
    location = input("Enter the location for Instagram accounts: ").strip()
    num_accounts = input("Enter the number of Instagram accounts to find: ").strip()

    # Input validation
    if not niche or not location:
        raise ValueError("Niche and location cannot be empty.")
    try:
        num_accounts = int(num_accounts)
        if num_accounts <= 0:
            raise ValueError
    except ValueError:
        raise ValueError("Number of accounts must be a positive integer.")

    # Construct search query
    search_query = f"{niche} {location} Instagram accounts"

    # Make API request to Tavily
    results = tavily_client.search(query=search_query, search_depth="advanced", max_results=num_accounts)

    # Process and display results
    instagram_accounts = []
    print(f"\nFound Instagram accounts for {niche} in {location}:")
    for result in results['results']:
        if 'instagram.com' in result['url']:
            account_info = f"- {result['title']}: {result['url']}"
            instagram_accounts.append(account_info)
            print(account_info)

    if not instagram_accounts:
        print(f"No Instagram accounts found for {niche} in {location}.")
    else:
        # Save results to file (optional)
        save_option = input("\nDo you want to save the results to a file? (y/n): ").lower()
        if save_option == 'y':
            filename = f"{niche}_{location}_instagram_accounts.txt"
            with open(filename, 'w') as f:
                f.write(f"Instagram accounts for {niche} in {location}:\n\n")
                f.write('\n'.join(instagram_accounts))
            print(f"Results saved to {filename}")

except ValueError as ve:
    print(f"Error: {ve}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")