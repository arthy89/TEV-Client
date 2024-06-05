import { View, Text, FlatList } from "react-native";
import TiempoLineCard from "./TiempoLineCard";

const TiempoTabla = ({ especial, admin }) => {
  // Calculo del tiempo resultado
  const tiemposConResultado = especial.tiempos.map((tiempo) => ({
    ...tiempo,
    tiempoResultado:
      Number(tiempo.horaLlegada) -
      Number(tiempo.horaSalida) +
      Number(tiempo.penalizacion),
  }));

  // Ordenar tiempos
  const tiemposOrdenados = tiemposConResultado.sort(
    (a, b) => a.tiempoResultado - b.tiempoResultado
  );

  // console.log(tiemposConResultado);

  return (
    <View>
      <Text className="font-bold text-2xl mx-5">{especial.nombre}</Text>
      <FlatList
        data={tiemposOrdenados}
        keyExtractor={(item) => item._id}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          const tiempoPrimero = tiemposOrdenados[0].tiempoResultado;
          const tiempoAnterior =
            index > 0 ? tiemposOrdenados[index - 1].tiempoResultado : null;

          return (
            <TiempoLineCard
              tiempo={{
                ...item,
                horaLlegada: item.tiempoResultado,
                horaSalida: 0, // Asumiendo que queremos mostrar el tiempo acumulado total}
              }}
              posicion={index + 1}
              diferenciaPrimero={item.tiempoResultado - tiempoPrimero}
              diferenciaAnterior={
                tiempoAnterior !== null
                  ? item.tiempoResultado - tiempoAnterior
                  : null
              }
              admin={admin}
            />
          );
        }}
      />
    </View>
  );
};

export default TiempoTabla;
