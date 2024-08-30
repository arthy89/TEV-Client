import { gql } from "@apollo/client";

export const GET_EVENTOS_SIM = gql`
  query getEventosSim {
    eventos {
      _id
      nombre
      fecha
      hora
      estado
    }
  }
`;

export const GET_EVENTOS_C = gql`
  query getEventosC {
    eventos {
      _id
      nombre
      tipo
      descripcion
      org {
        _id
        nombre
        region
      }
      lugar
      fecha
      hora
      estado
    }
  }
`;

export const GET_EVENTO_TIEMPOS = gql`
  query ($id: ID!) {
    evento(_id: $id) {
      _id
      nombre
      categorias {
        _id
        nombre
      }
      etapas {
        _id
        nombre
        especiales {
          _id
          nombre
          tiempos {
            _id
            horaSalida
            horaLlegada
            penalizacion
            tripulacion {
              _id
              piloto {
                _id
                nombre
                apellidos
              }
              navegante {
                _id
                nombre
                apellidos
              }
              auto
              autoNum
              categoria
            }
          }
        }
      }
    }
  }
`;

export const GET_EVENTO_M = gql`
  query getEventoM($id: ID!) {
    evento(_id: $id) {
      _id
      nombre
      estado
      etapas {
        _id
        nombre
        especiales {
          _id
          nombre
        }
      }
      categorias {
        _id
        nombre
      }
      tripulaciones {
        _id
        autoNum
      }
    }
  }
`;

export const CREAR_EVENTO = gql`
  mutation (
    $nombre: String!
    $tipo: String!
    $descripcion: String!
    $orgId: ID!
    $lugar: String!
    $fecha: String!
    $hora: String!
    $file: Upload
    $rutaUrl: String
  ) {
    crearEvento(
      nombre: $nombre
      tipo: $tipo
      descripcion: $descripcion
      orgId: $orgId
      lugar: $lugar
      fecha: $fecha
      hora: $hora
      file: $file
      rutaUrl: $rutaUrl
    ) {
      nombre
      descripcion
      imgUrl
    }
  }
`;

export const DEL_EVENTO = gql`
  mutation ($id: ID!) {
    delEvento(_id: $id) {
      _id
      nombre
    }
  }
`;
