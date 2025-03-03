Feature: Verify the search functionality

  Scenario Outline: Verify the search for a company 
    Given The user is on the landing page for the WD site
    When The user searches for the company "<searchCriteria>" in the top right search bar
    And The user clicks on the Company Name hyperlink from the search results
    Then The user lands on the "<searchCriteria>" vote card page.
    And "<searchCriteria>" should appear in the top banner.

    Examples:
      | searchCriteria          |
      | Activision Blizzard Inc |
