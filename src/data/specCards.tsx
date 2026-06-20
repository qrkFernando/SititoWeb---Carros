import PassengerIcon from "@/components/icons/PassengerIcon";
import EngineIcon from "@/components/icons/EngineIcon";
import PowerIcon from "@/components/icons/PowerIcon";
import TransmissionIcon from "@/components/icons/TransmissionIcon";
import AccelerationIcon from "@/components/icons/AccelerationIcon";

export interface SpecCardData {
  id: string;
  icon: React.ReactNode;
  label: string;
  bigValue?: string;
  bigUnit?: string;
  sub1?: string;
  sub2?: string;
  highlightBlock?: { brand: string; detail: string };
  style?: {
    cardWidth?: number;
    bigValueSize?: number;
    labelSize?: number;
    outerRadius?: number;
    innerBlockRadius?: number;
    cardHeight?: number;
  };
}

const specCards: SpecCardData[] = [
  {
    id: "passenger",
    icon: <PassengerIcon />,
    label: "Capacidad de Pasajeros",
    bigValue: "4",
    sub1: "Pasajero",
    sub2: "capacidad",
    style: { cardWidth: 320, bigValueSize: 46, labelSize: 22, outerRadius: 32, cardHeight: 170 },
  },
  {
    id: "engine",
    icon: <EngineIcon />,
    label: "Motor",
    sub1: "Artesanal",
    sub2: "6.2L V8 Supercargado",
    style: { cardWidth: 260, labelSize: 26, outerRadius: 24, cardHeight: 170 },
  },
  {
    id: "power",
    icon: <PowerIcon />,
    label: "Potencia",
    bigValue: "650",
    bigUnit: "hp",
    sub1: "Potencia",
    sub2: "@ 6,400 rpm",
    style: { cardWidth: 270, bigValueSize: 62, labelSize: 24, outerRadius: 24, cardHeight: 170 },
  },
  {
    id: "transmission",
    icon: <TransmissionIcon />,
    label: "Transmisión",
    sub1: "Transmisión automática",
    highlightBlock: { brand: "SS", detail: "Transmisión automática 10 velocidades" },
    style: { cardWidth: 290, labelSize: 20, outerRadius: 28, innerBlockRadius: 16, cardHeight: 170 },
  },
  {
    id: "acceleration",
    icon: <AccelerationIcon />,
    label: "Aceleración",
    bigValue: "3.5",
    bigUnit: "seg",
    sub1: "Aceleración",
    sub2: "0-60 mph",
    style: { cardWidth: 260, bigValueSize: 50, labelSize: 22, outerRadius: 24, cardHeight: 170 },
  },
];

export default specCards;
