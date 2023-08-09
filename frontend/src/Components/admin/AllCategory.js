import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import { SERVER_BASE_URL } from "../../config";
import AdminMenuBar from "./AdminMenuBar";
const AdminAllCategory = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios.get(SERVER_BASE_URL + "/category/").then((response) => {
      const result = response.data;
      setCategory(result);
      console.log(result);
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(SERVER_BASE_URL + `/category/id/${id}`)
      .then((response) => {
        console.log("deleted successfully", response.data);
        toast.success("Success!!!");
        navigate("/adminDashboard");
        getCategory();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const dashboard = () => {
    navigate("/adminDashboard");
  };

  return (
    <div className="row">
      <AdminMenuBar />

      <div className="col-8">
        <h1 className="text-indigo-600">All Category</h1>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {category.map((cat) => (
              <tr key={cat.id}>
                <td> {cat.id}</td>

                <td>
                  {cat.categoryName}
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      style={{ height: "30px" }}
                      src={SERVER_BASE_URL + "/store/" + cat?.categoryImage}
                      alt=""
                    />
                  </div>
                </td>
                <td>{cat.categoryDescription}</td>

                <td>
                  {/* <Link
                    className="btn btn-info"
                    to={`/category/edit/${cat.id}`}
                  >
                    Update
                  </Link> */}
                  &nbsp;
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(cat.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={dashboard}>Back To DashBoard</Button>{" "}
      </div>
    </div>
  );
};

export default AdminAllCategory;
