package testRunner;

import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(features="Feature/demo1.feature", glue= {"stepdef"} , plugin={"html:target/cucu.html"}) 
	
	
	
	public class RunTest {
		
}
