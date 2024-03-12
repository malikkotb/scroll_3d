import { Application } from '@splinetool/runtime';

export default function Bottle() {


const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/5s4gn6OQZDkrVrhf/scene.splinecode');

  return (
    <div>bottle</div>
  )
}
