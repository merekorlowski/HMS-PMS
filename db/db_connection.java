import java.sql.Connection;
import java.sql.DriverManager;

public class db_connection {

	private Connection connection;

	public Connecstion getConnection() {
		return connection;
	}

	public void openConnection() {
		try {

			Class.forName("org.postgresql.Driver");
			connection = DriverManager.getConnection(
					"jdbc:postgresql://acadb:5432/svale054", "user", "pwd");
			System.out.println("Connection Established");
		} catch (Exception e) {
			System.out.println("No connection established: " + e.toString());
		}
	}

}
