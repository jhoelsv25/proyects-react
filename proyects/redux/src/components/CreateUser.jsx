import { Card, TextInput, Title, Button } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";

export const CreateUser = () => {
  const { addUser } = useUserActions();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const github = formData.get("github");
    addUser({ name, email, github });
  };
  return (
    <Card>
      <Title>Create new User</Title>

      <form onSubmit={handleForm}>
        <TextInput name="name" label="Name" placeholder="Su nombre" />
        <TextInput name="email" label="Email" placeholder="Su Email" />
        <TextInput name="github" label="user Github" placeholder="Su Github" />

        <Button className="mt-10">Crear Usuario</Button>
      </form>
    </Card>
  );
};
