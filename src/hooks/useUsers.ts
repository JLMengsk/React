import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => cancel();
      // const fetchUsers = async () => {
      //   try {
      //     const res = await axios.get<User[]>(
      //       "https://jsonplaceholder.typicode.com/uxsers"
      //     );
      //     setUsers(res.data);
      //   } catch (err) {
      //     setError((err as AxiosError).message);
      //   }
      // };
      // fetchUsers();
    }, []);
    return {users, error, isLoading, setUsers, setError};
}
export default useUsers;