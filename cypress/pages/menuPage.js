class MenuPage {
    selectorsList() {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails'] .oxd-text--span",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']", 
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']", 
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']"
        }

        return selectors
    }

    accessAdminMenu() {
        cy.get(this.selectorsList().adminButton).click()

    }

    accessPimMenu() {
        cy.get(this.selectorsList().pimButton).click()

    }

    accessLeaveMenu() {
        cy.get(this.selectorsList().leaveButton).click()

    }

    accessTimeMenu() {
        cy.get(this.selectorsList().timeButton).click()
        
    }

    accessRecruitmentMenu() {
        cy.get(this.selectorsList().recruitmentButton).click()

    }

    accessMyInfoMenu() {
        cy.get(this.selectorsList().myInfoButton).click()

    }

    accessPerformanceMenu() {
        cy.get(this.selectorsList().performanceButton).click()

    }

    accessDashboardMenu() {
        cy.get(this.selectorsList().dashboardButton).click()

    }

    accessDirectoryMenu() {
        cy.get(this.selectorsList().directoryButton).click()

    }

    accessMaintenanceMenu() {
        cy.get(this.selectorsList().maintenanceButton).click()

    }

    accessClaimMenu() {
        cy.get(this.selectorsList().claimButton).click()

    }

    accessBuzzMenu() {
        cy.get(this.selectorsList().buzzButton).click()
        
    }
}

export default MenuPage