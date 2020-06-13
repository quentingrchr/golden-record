<template>
  <div>
    <p>{{ this.title }}</p>
    <span>
      <em>{{ counter.years }}</em> yrs
      <em>{{ this.displayValue(counter.months) }}</em> mth
      <em>{{ this.displayValue(counter.days) }}</em> days
      <em>{{ this.displayValue(counter.hours) }}</em> hrs
      <em>{{ this.displayValue(counter.mins) }}</em> mins
      <em>{{ this.displayValue(counter.secs) }}</em>
      sec
    </span>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Counter",
  props: {
    title: String,
    date: String,
  },
  mounted() {
    var now = `${moment().format("DD/MM/YYYY HH:mm:ss")}`;
    var then = this.date;

    var ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(
      moment(then, "DD/MM/YYYY HH:mm:ss")
    );
    var d = moment.duration(ms);
    this.counter.years = d.years();
    this.counter.months = d.months();
    this.counter.days = d.months();
    this.counter.hours = d.hours();
    this.counter.mins = d.minutes();
    this.counter.secs = d.seconds();
    console.log(d);

    this.startCounter();
  },
  data: function() {
    return {
      counter: {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      },
    };
  },

  methods: {
    startCounter: function() {
      setInterval(this.increaseCounter, 1000);
    },
    is31Month: function() {
      if (
        this.months === 1 ||
        this.months === 3 ||
        this.months === 5 ||
        this.months === 7 ||
        this.months === 8 ||
        this.months === 10 ||
        this.months === 11
      ) {
        return true;
      } else if (this.months !== 2) return false;
    },
    isBisextile: function(year) {
      if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
      } else {
        return false;
      }
    },
    increaseCounter: function() {
      this.counter.secs += 1;
      if (this.counter.secs === 60) {
        this.counter.secs = 0; // reset secs
        this.counter.mins += 1;

        if (this.counter.mins === 60) {
          this.counter.mins = 0; // reset mins
          this.counter.hours += 1;

          if (this.counter.hours === 24) {
            this.counter.hours = 0; // reset hours
            this.counter.days += 1;

            if (
              (this.counter.days === 28 &&
                !this.isBisextile() &&
                this.months === 2) ||
              (this.counter.days === 29 &&
                this.isBisextile() &&
                this.months === 2) ||
              (this.counter.days === 31 && this.is31Month()) ||
              (this.counter.days === 30 && !this.is31Month())
            ) {
              this.counter.days = 1; // reset days
              this.counter.months += 1;
              if (this.months === 12) {
                this.counter.months = 1; // reset months
                this.years += 1;
              }
            }
          }
        }
      }
    },
    displayValue: function(value) {
      if (value < 10) {
        return `0${value}`;
      } else {
        return value;
      }
    },
  },
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  padding: 8px 32px;
  position: relative;
  font-size: 16px;
  p {
    font-weight: 700;
    font-family: Product Sans;
    color: $primary-darkblue;
    margin-right: 15px;
  }

  @media (max-width: 580px) {
    padding: 8px 16px;
  }

  span {
    color: $secondary-blue;
    margin-left: 40px;
    margin: auto 8px;
    @media (max-width: 500px) {
      margin-left: 20px;
    }

    @media (max-width: 316px) {
      margin-left: 8px;
    }

    em {
      font-size: 1.2em;

      color: $primary-darkblue;
    }
  }
}
</style>
