package mx.uv;
import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/bienvenido", (req, res) -> "<h1>Bienvenido</h1>");
        get("/hola", (req, res) -> "<h1>Hola</h1>");
        get("/adios", (req, res) -> "<h1>Adios</h1>");
        get("/fin", (req, res) -> "<h1>Fin</h1>");
    }
}
