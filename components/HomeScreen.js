import { View, Text } from 'react-native'
import { useForm, Controller } from "react-hook-form"
import { TextInput, Button } from 'react-native-paper';
export default function HomeScreen({ navigation, route }) {
  const {
    control,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      idUser: "",
      fullname: "",
      email: "",
      passaword: "",
      uri: "",
      age: ""
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Bienvenido {route.params.email}</Text> */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4,
          pattern:/^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificación"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="idUser"
      />
      {errors.idUser?.type == "required" && <Text style={{ color: 'red' }}>Id del usuario es obligatorio.</Text>}
      {errors.idUser?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 12 Chars. </Text>}
      {errors.idUser?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 4 Chars. </Text>}
      {errors.idUser?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Solo Numeros. </Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
          minLength: 3,
          pattern:/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == "required" && <Text style={{ color: 'red' }}>Nombre Completo Es Obligatorio.</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 30 Chars. </Text>}
      {errors.fullname?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 3 Chars. </Text>}
      {errors.fullname?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Solo Letras. </Text>}


      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 256,
          minLength: 10,
          pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" /
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Correo Electronico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type == "required" && <Text style={{ color: 'red' }}>El Correo Es Obligatorio.</Text>}
      {errors.email?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 265 Chars. </Text>}
      {errors.email?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 10 Chars. </Text>}
      {errors.email?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Un Correo Valido. </Text>}


      <Button
        style={{ marginTop: 20, backgroundColor: 'yellow' }}
        icon="content-save"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
      </Button>


      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} />*/}

    </View>
  );
 }
