let data;
let selector;
let urls;
describe('Demo test case',()=>{
        before(()=>{
           cy.fixture('testdata').then((testData)=>{
           data=testData;
              
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

    it('Checking all plugins',()=>{ 
    cy.launchUrl(urls.uaturl)
    cy.TypeInside(selector.usernameField,data.email);
    cy.TypeInside(selector.passwordField,data.password);

    
    })
})