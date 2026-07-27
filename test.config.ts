
/* export class TestConfig{

static appUrl = "http://tutorialsninja.com/demo/index.php?route=common/home"

static email1 = "qedge123@gmail.com"
static Password1= "qedge123@gmail.com"


} */
export class TestConfig{
    static appUrl= process.env.BASE_URL!;
    static email = process.env.APPUSERNAME!;
    static Password = process.env.PASSWORD!;

    static productName = "MacBook";
    static invalidpriduct = "invalidproduct123";
    
}