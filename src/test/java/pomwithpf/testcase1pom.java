package pomwithpf;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class testcase1pom {
	
	@Test
	
	public void f() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
			driver.get("http://demowebshop.tricentis.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		page1class locateelements =PageFactory.initElements(driver, page1class.class);
		locateelements.loginmethod( "pruthviab@gmail.com", "1234567890");
	}

}
