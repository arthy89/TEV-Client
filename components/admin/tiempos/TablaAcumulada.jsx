import { View, Text, FlatList } from "react-native";
import TiempoLineCard from "./TiempoLineCard";

const TablaAcumulada = ({ especiales, admin }) => {
  // Calcular el tiempo acumulado por cada tripulación
  const tripulacionTiempos = {};

  especiales.forEach((especial) => {
    especial.tiempos.forEach((tiempo) => {
      const tripulacionId = tiempo.tripulacion._id;
      const horaLlegada = Number(tiempo.horaLlegada);
      const horaSalida = Number(tiempo.horaSalida);
      const penalizacion = Number(tiempo.penalizacion) || 0;
      const tiempoResultado = horaLlegada - horaSalida + penalizacion;

      if (!tripulacionTiempos[tripulacionId]) {
        tripulacionTiempos[tripulacionId] = {
          tripulacion: tiempo.tripulacion,
          tiempoAcumulado: 0,
          numEspeciales: 0,
          penalizacionAcumulada: 0,
        };
      }

      tripulacionTiempos[tripulacionId].tiempoAcumulado += tiempoResultado;
      tripulacionTiempos[tripulacionId].numEspeciales += 1;
      tripulacionTiempos[tripulacionId].penalizacionAcumulada += penalizacion;
    });
  });

  // Convertir el objeto a una lista y ordenar por tiempo acumulado
  const tiemposOrdenados = Object.values(tripulacionTiempos).sort(
    (a, b) =>
      b.numEspeciales - a.numEspeciales || a.tiempoAcumulado - b.tiempoAcumulado
  );

  return (
    <View>
      <Text className="font-bold text-2xl mx-5">Tiempo Total Acumulado</Text>
      <FlatList
        data={tiemposOrdenados}
        keyExtractor={(item) => item.tripulacion._id}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          const tiempoPrimero = tiemposOrdenados[0].tiempoAcumulado;
          const tiempoAnterior =
            index > 0 ? tiemposOrdenados[index - 1].tiempoAcumulado : null;

          return (
            <TiempoLineCard
              tiempo={{
                ...item,
                horaLlegada: item.tiempoAcumulado,
                horaSalida: 0, // Asumiendo que queremos mostrar el tiempo acumulado total
                penalizacion: item.penalizacionAcumulada,
              }}
              posicion={index + 1}
              especiales={item.numEspeciales}
              diferenciaPrimero={item.tiempoAcumulado - tiempoPrimero}
              diferenciaAnterior={
                tiempoAnterior !== null
                  ? item.tiempoAcumulado - tiempoAnterior
                  : null
              }
              admin={admin} // Asume que 'admin' no es necesario aquí, puedes ajustarlo según tus necesidades
            />
          );
        }}
      />
    </View>
  );
};

export default TablaAcumulada;
