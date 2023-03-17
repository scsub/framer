import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  height: 300px;
  border-radius: 10px;
  background-color: rgba(189, 112, 178, 0.338);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
const btnExp = {
  sec: { backgroundColor: "rgba(255,255,255)", height: 70, width: 110 },
};
const btnsmall = {
  sec: { backgroundColor: "rgba(150,150,150)", height: 55, width: 90 },
};
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 100%;
`;
const CirBtn = styled(motion.button)<complete>``;
const hover = {
  hover1: {
    y: -50,
    x: -75,
    scale: 1.3,
    transition: {
      type: "tween",
    },
  },
  hover2: {
    y: -50,
    x: 75,
    scale: 1.3,
    transition: {
      type: "tween",
    },
  },
  hover3: {
    y: 50,
    x: -75,
    scale: 1.3,
    transition: {
      type: "tween",
    },
  },
  hover4: {
    y: 50,
    x: 75,
    scale: 1.3,
    transition: {
      type: "tween",
    },
  },
};
interface complete {
  completed: boolean;
}
function App() {
  const [id, setId] = useState<null | string>(null);
  const [swi, setSwi] = useState(false);
  const changeCircle = () => {
    setSwi((prev) => !prev);
  };
  return (
    <Wrapper>
      <Grid>
        <AnimatePresence custom={"1"}>
          <Box
            onClick={() => setId("1")}
            key={"1"}
            layoutId={"1"}
            variants={hover}
            whileHover="hover1"
          >
            {swi === true ? <Circle layoutId="cir"></Circle> : null}
          </Box>
          <Box
            onClick={() => setId("2")}
            key={"2"}
            layoutId={"2"}
            variants={hover}
            whileHover="hover2"
          ></Box>
          <Box
            onClick={() => setId("3")}
            key={"3"}
            layoutId={"3"}
            variants={hover}
            whileHover="hover3"
          />
          <Box
            onClick={() => setId("4")}
            key={"4"}
            layoutId={"4"}
            variants={hover}
            whileHover="hover4"
          >
            {swi === true ? null : <Circle layoutId="cir"></Circle>}
          </Box>
        </AnimatePresence>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{ width: 400, height: 300, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
        <CirBtn
          completed={swi}
          onClick={changeCircle}
          variants={swi ? btnExp : btnsmall}
          animate="sec"
        >
          SWITCH
        </CirBtn>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
