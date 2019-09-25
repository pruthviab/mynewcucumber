package pageobjectmodel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class pageclass {
	WebDriver driver;
	By lnk=By.linkText("Log in");
	By uname=By.name("Email");
	By pwd=By.name("Password");
	By lin=By.xpath("//input[@value='Log in']");
	By lout=By.linkText("Log out");
	public pageclass(WebDriver driver) {
		this.driver=driver;
	}
	public void clicklink() {
		driver.findElement(lnk).click();
	}
	public void typeuname(String username) {
		driver.findElement(uname).sendKeys("pruthviab@gmail.com");
	}
	public void typepassword(String password) {
		driver.findElement(pwd).sendKeys("1234567890");
	}
	public void clicklogin() {
		driver.findElement(lin).click();
	}
	public void clicklogoutbtn() {
		driver.findElement(lout).click();
	}
	

}
