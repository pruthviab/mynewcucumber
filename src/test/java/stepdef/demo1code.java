package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class demo1code {
	
	WebDriver driver=null;
	@Given("Login page is opened successfully")
	public void login_page_is_opened_successfully() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	driver.manage().window().maximize();
	
   
}

	@When("users clicks on Signin buttons")
	public void users_clicks_on_Signin_buttons() {
	driver.findElement(By.linkText("SignIn")).click();
}

	@When("users enters {string} as usernamee {string} as passwordd")
	public void users_enters_as_usernamee_as_passwordd(String username, String password) {
	driver.findElement(By.name("userName")).sendKeys(username);
	driver.findElement(By.id("password")).sendKeys(password);
	driver.findElement(By.name("Login")).click();
	driver.close();
}

	@Then("msg displayed login successfullyyyy")
	public void msg_displayed_login_successfullyyyy() {
   
}

}
