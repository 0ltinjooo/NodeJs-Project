const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('barbershop', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306'
});


const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const services = sequelize.define(
  "service",
  {
    ServiceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Servicename: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.STRING,
    },
    Price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

const appointment = sequelize.define(
  "appointment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    barberId: {
      type: DataTypes.INTEGER,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const AppointmentService = sequelize.define(
  "AppointmentService",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    appointmentId: {
      type: DataTypes.INTEGER,
    },
    serviceId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = AppointmentService;



(async () => {
  await sequelize.sync({ force: true });
})();

