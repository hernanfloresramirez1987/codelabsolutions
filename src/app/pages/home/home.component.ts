import { Component, OnInit } from '@angular/core';
import { ClickEvent, Container, HoverEvent, loadFont, MoveDirection, OutMode } from "@tsparticles/engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { ReplaySubject } from 'rxjs';



declare const particlesJS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit{
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions: any = {
    // Elimina o deja el background como transparente
    // background: {
    //   color: {
    //     value: ["navy", "yellow", "crimson", "green"],
    //   },
    // },
    background: {
      color: {
        value: "transparent", // o simplemente no pongas nada
      },
    },
    fpsLimit: 120,
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,  
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 800,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 8,
          speed: 5
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    particles: {
      color: {
        value: ["#34495e"], //"#000080", "#cccccc", "#dc143c", "#008000"]
      },
      links: {
        color: "#444444",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: true,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: false,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}