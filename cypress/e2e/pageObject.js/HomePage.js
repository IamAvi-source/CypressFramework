class Homepage{

    recruitmentLink(recruitment,candidate)
    {
        cy.ClickElement(recruitment);
        cy.isVisible(candidate)
    }

    jobTitleDropdown(element1,element2)
    {
        cy.ClickElement(element1);
        cy.ClickElement(element2);
    }

    jobTitleDropdown(element1,element2)
    {
        cy.ClickElement(element1);
        cy.ClickElement(element2);
    }

    vacancyDropdown(element1,element2)
    { 
        
        cy.ClickElement(element1);
        cy.ClickElement(element2);
    }
    

}
export default Homepage;