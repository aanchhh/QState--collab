import Background from "../components/dashboard/Background";
import Layout from "../components/dashboard/Layout";

import DarkRectangleBg from "../components/dashboard/DarkRectangleBg";
import LightRectangleBg from "../components/dashboard/LightRectangleBg";
import Line from "../components/dashboard/Line";
import CustomButton from "../components/dashboard/CustomButton";
import DynamicGrid from "../components/dashboard/DynamicGrid";

const Dashboard = () => {
  return (
    <div>
      <Background>
        <Layout />
        <DynamicGrid>
          <DarkRectangleBg width="auto" height="250px">
            <h1 className="text-white">BLACK RECTANGLEBG</h1>
            <span>YEA</span>
          </DarkRectangleBg>
          <CustomButton
            text="white transparent bg by default"
            className=""
            onClick={() => alert("Approved!")}
          />
          <Line rotate={0} width={500} className="my-2  " />

          <CustomButton
            text="yellow transparent bg"
            className="bg-yellow-200 min-w-full"
            onClick={() => alert("Approved!")}
          />

          <LightRectangleBg width="auto" height="250px">
            <h1 className="text-white">WHITE RECTANGLEBG</h1>
            <span>mhmm</span>
          </LightRectangleBg>
          <Line rotate={90} width={500} className="mx-20 my-11" />
        </DynamicGrid>
      </Background>
    </div>
  );
};
export default Dashboard;
