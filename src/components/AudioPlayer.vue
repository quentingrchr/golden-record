<template>
  <div class="player">
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden">
      <defs>
        <symbol id="previous" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" transform="rotate(180 16 16)" fill="#F8F8F8" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.8997 12.0717L17.5 15.374L17.5 12.8715C17.5 12.0473 16.5589 11.577 15.8997 12.0717L11.0656 15.7C11.0428 15.7171 11.0209 15.735 11 15.7536L11 11.9998L9 11.9998L9 20.9998L11 20.9998L11 17.246C11.0209 17.2646 11.0428 17.2824 11.0656 17.2996L15.8997 20.9279C16.5589 21.4226 17.5 20.9523 17.5 20.1281L17.5 17.6256L21.8997 20.9279C22.5589 21.4226 23.5 20.9523 23.5 20.1281L23.5 12.8715C23.5 12.0473 22.5589 11.577 21.8997 12.0717Z"
            fill="#14131C"
          />
        </symbol>
        <symbol id="play" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" transform="rotate(180 16 16)" fill="#F8F8F8" />
          <path
            d="M21.4526 14.9082C22.0492 15.3037 22.0492 16.1797 21.4526 16.5752L13.8109 21.6408C13.1461 22.0814 12.2583 21.6048 12.2583 20.8073L12.2583 10.6761C12.2583 9.87863 13.1461 9.402 13.8109 9.84263L21.4526 14.9082Z"
            fill="#14131C"
          />
        </symbol>
        <symbol id="next" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" transform="rotate(180 16 16)" fill="#F8F8F8" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.1003 19.9283L14.5 16.626V19.1285C14.5 19.9527 15.4411 20.423 16.1003 19.9283L20.9344 16.3C20.9572 16.2829 20.9791 16.265 21 16.2464V20.0002H23V11.0002H21V14.754C20.9791 14.7354 20.9572 14.7176 20.9344 14.7004L16.1003 11.0721C15.4411 10.5774 14.5 11.0477 14.5 11.8719V14.3744L10.1003 11.0721C9.44109 10.5774 8.5 11.0477 8.5 11.8719V19.1285C8.5 19.9527 9.44109 20.423 10.1003 19.9283Z"
            fill="#14131C"
          />
        </symbol>
        <symbol id="soundon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M11.2432 3.01766C12.3134 3.41802 13.2297 4.1051 13.8746 4.99068C14.5196 5.87626 14.8636 6.91993 14.8627 7.98771C14.8636 9.05543 14.5195 10.099 13.8746 10.9845C13.2297 11.8701 12.3133 12.5571 11.2432 12.9574V14.0754C12.6283 13.6535 13.8339 12.8377 14.688 11.7445C15.5422 10.6513 16.0014 9.33655 16 7.98771C16 5.14808 14.0069 2.73765 11.2432 1.89644V3.01766V3.01766ZM11.2432 5.65728C11.6074 5.94495 11.8997 6.30237 12.0998 6.70482C12.2999 7.10727 12.403 7.54513 12.4022 7.98811C12.4031 8.43103 12.2999 8.86885 12.0998 9.27124C11.8997 9.67363 11.6074 10.031 11.2432 10.3185V11.4561C12.5362 10.7637 13.4054 9.46972 13.4054 7.98811C13.4057 7.28537 13.2061 6.59494 12.8265 5.98619C12.447 5.37743 11.9009 4.87179 11.2432 4.52007V5.65728V5.65728ZM1.2973 11.1913H4.75676L8.64865 15.5974C9.08108 16.1734 10.093 16.1298 10.3784 15.4766V0.531631C10.0277 -0.121176 9.10746 -0.173577 8.64865 0.378829L4.75676 4.80007H1.2973C0.189838 4.80007 0 4.98448 0 5.98569V9.99053C0 10.9673 0.216216 11.1913 1.2973 11.1913Z"
            fill="#14131C"
          />
        </symbol>
        <symbol id="soundoff" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10.3406 3.7145C11.3248 4.10623 12.1676 4.77848 12.7608 5.64495C13.3539 6.51142 13.6704 7.53257 13.6695 8.57731C13.6704 9.62199 13.3539 10.6431 12.7607 11.5095C12.1676 12.3759 11.3248 13.0481 10.3406 13.4397V14.5336C11.6145 14.1208 12.7233 13.3227 13.5089 12.2531C14.2945 11.1835 14.7168 9.89704 14.7155 8.57731C14.7155 5.79895 12.8824 3.44054 10.3406 2.61749V3.7145V3.7145ZM10.3406 6.29717C10.6756 6.57863 10.9443 6.92834 11.1284 7.32211C11.3124 7.71587 11.4073 8.14428 11.4065 8.5777C11.4074 9.01107 11.3125 9.43944 11.1285 9.83315C10.9444 10.2269 10.6756 10.5765 10.3406 10.8578V11.9709C11.5298 11.2934 12.3292 10.0273 12.3292 8.5777C12.3295 7.89013 12.1459 7.2146 11.7968 6.61898C11.4477 6.02336 10.9455 5.52863 10.3406 5.1845V6.29717V6.29717ZM1.19315 11.7118H4.37488L7.95433 16.0228C8.35205 16.5864 9.2827 16.5437 9.5452 15.9046V1.28212C9.22265 0.643402 8.37631 0.592132 7.95433 1.13262L4.37488 5.45846H1.19315C0.174598 5.45846 0 5.63888 0 6.61849V10.5369C0 11.4926 0.198858 11.7118 1.19315 11.7118Z"
            fill="#14131C"
          />
          <line
            y1="-0.5"
            x2="21.3658"
            y2="-0.5"
            transform="matrix(0.694287 -0.719698 0.694288 0.719698 1.16602 16.762)"
            stroke="#14131C"
          />
        </symbol>
      </defs>
    </svg>

    <p class="player__title">Songs - Title of Song</p>
    <div class="player__controller">
      <div class="player__mainSettings">
        <svg>
          <use href="#previous" />
        </svg>
        <svg>
          <use href="#play" />
        </svg>
        <svg>
          <use href="#next" />
        </svg>
      </div>
      <div class="player__soundSettings">
        <svg>
          <use href="#soundon" />
        </svg>
        <input class="player__soundSlider" type="range" min="0" max="100" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer"
};
</script>

<style lang="scss" scoped>
svg,
input {
  cursor: pointer;
}

.player {
  width: 304px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.player__title {
  margin-bottom: 8px;
}

.player__controller {
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $secondary-grey-blue;
}

.player__mainSettings {
  display: flex;

  svg {
    width: 32px;
    height: 32px;

    &:nth-child(2) {
      margin: 0px 16px;
    }
  }
}

.player__soundSettings {
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
}

.player__soundSettings input {
  -webkit-appearance: none; /*nécessaire pour Chrome */
  -moz-appearance: none;
  width: 92px;
  outline: none;
  background-color: transparent;
  margin-left: 8px;
}

/* slider for chrome*/
.player__soundSettings input::-webkit-slider-runnable-track {
  height: 4px;
  border: none;
  border-radius: 10px;
  background-color: $primary-white;
}

/* slider for mozz */
.player__soundSettings input::-moz-range-track {
  height: 4px;
  border: none;
  border-radius: 10px;
  background-color: $primary-white;
}

/* cursor for chrome*/
.player__soundSettings input::-webkit-slider-thumb {
  -webkit-appearance: none; /* également nécessaire sur le curseur */
  width: 8px;
  height: 8px;
  border: 1px solid $primary-darkblue;
  border-radius: 50%;
  padding: 4px;
  background: $primary-darkblue;
  margin-top: -3px;
}

/* cursor for mozz */
.player__soundSettings input::-moz-range-thumb {
  -moz-appearance: none;
  width: 4px;
  height: 4px;
  border: none;
  border-radius: 50%;
  padding: 4px;
  background: $primary-darkblue;
  margin-top: -3px;
}
</style>