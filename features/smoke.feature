Feature: Calligraphy functionality

Scenario Outline: add test
    Given I am on the Calligraphy page
    When I click the add button
    And I fill the name with "<name>"
    And I fill the score with "<score>"
    And I click the ok button
    Then I can see the first block conatins "<grade>"

    Examples:
        | name | score | grade |
        | 橘子  | 60    | D     |
        | F7   | 70    | C     |
        | 杰克  | 80    | B     |
        | 六月  | 90    | A     |

