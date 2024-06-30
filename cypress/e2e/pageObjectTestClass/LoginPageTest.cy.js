import loginPageModule from "../pageObject.js/LoginPage";
let testData;
let selector;
let urls;
describe('LoginPageTest',()=>{
   


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

    it('loginFunctionality',()=>{
       const lp=new loginPageModule()// object creation for LoginPageClass.js
       //cy.launchUrl(urls.uaturl);
       cy.login(selector.usernameField,testData.email,selector.passwordField,testData.password,selector.submitButton)
    //    lp.emailField(selector.usernameField,testData.email); 
    //    lp.passwordField(selector.passwordField,testData.password);
    //    lp.submitButton(selector.submitButton);
       lp.verifyLogin(selector.logo);


    })
})
