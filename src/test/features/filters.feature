Feature: Verify the filtering functionality

  Scenario Outline: Verify filters
    Given The user is on the landing page for the WD site
    And The Country filter is available
    When The user selects "<filterName>" from the "<filterType>" filter list on the left panel
    And Click on Update button for the "<filterType>" filter list
    Then The grid displays all meetings associated with the "<filterType>" "<filterName>"

    Examples:
      | filterType | filterName |
      | country    | Belgium    |
