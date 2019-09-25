package stepdef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class loginaction {
	WebDriver driver=null;
	@Given("login page is opened")
	public void login_page_is_opened() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.manage().window().maximize();
		driver.findElement(By.linkText("SignIn")).click();
	}
	@When("user enters {string} as a username and {string} as a password")
	public void user_enters_as_a_username_and_as_a_password(String string, String string2) {
		driver.findElement(By.name("userName")).sendKeys("Lalitha");
		driver.findElement(By.id("password")).sendKeys("Password123");
	}
	@When("user clicks on login Button")
	public void user_clicks_on_login_Button() {
		driver.findElement(By.name("Login")).click();
	   
	}

	@Then("user will Finds a testmeapp homepage")
	public void user_will_Finds_a_testmeapp_homepage() {
		System.out.println("Title of the page is "+driver.getTitle());
	   
	}

}
