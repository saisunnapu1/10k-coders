import "../css/client.css";
let Client=()=>{
    return(
    <div class="container mt-5 table">
        
                
        <table class="table table-hover">
            <h2 >Our Clients</h2>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sai</td>
              <td>ram</td>
              <td>sai@gmail.com</td>
            </tr>
            <tr>
              <td>hari</td>
              <td>priya</td>
              <td>priya@example.com</td>
            </tr>
            <tr>
              <td>bheem</td>
              <td>shankar</td>
              <td>bheem@example.com</td>
            </tr>
          </tbody>
        </table>
    </div>
    )
}
export default Client;