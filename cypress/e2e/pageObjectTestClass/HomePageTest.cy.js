import Homepage from "../pageObject.js/HomePage";
let testData;
let selector;
let urls;

describe('HomePageTest',()=>{

    before(()=>{ 
        cy.fixture('testdata').then((data)=>{       // Data Loading
            testData=data;
        })
    })
    
    before(()=>{
        cy.fixture('selectors').then((sel)=>{
            selector=sel;
        })
    })
    
    before(()=>{
        cy.fixture('urls').then((url)=>{
            urls=url;
        })
        })

        beforeEach('Launch URL',()=>{

            cy.launchUrl(urls.uaturl);
         })

    it('recruimentLink',()=>{
      const  hp= new Homepage();
      cy.launchUrl(urls.uaturl);
      cy.login(selector.usernameField,testData.email,selector.passwordField,testData.password,selector.submitButton);
      hp.recruitmentLink(selector.recruitmentLink,selector.candidateText);
      hp.jobTitleDropdown(selector.jobDropdown,selector.DropdownOption);
      hp.vacancyDropdown(selector.vacancyDropDown,selector.vacancyName);
        
    })
})