package pageobjectmodel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class testcasepom {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6B.01.16\\Desktop\\browser_drivers\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
	    pageclass pobject=new pageclass(driver);
		driver.get("http://demowebshop.tricentis.com/");
		driver.manage().window().maximize();
		pobject.clicklink();
		String username=null;
		pobject.typeuname(username);
		String password=null;
		pobject.typepassword(password);
		pobject.clicklogin();
		System.out.println("Title of the page is "+driver.getTitle());
		pobject.clicklogoutbtn();
	}

}
