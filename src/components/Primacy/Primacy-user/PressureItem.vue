<template>
	<div class="content__body">
		<div class="headers">
			<div class="profile">
				<h1 class="title">Control de Tensión Arterial</h1>
			</div>
		</div>
		<div class="box__scroll-container">
			<div class="box-item">
				<div class="item mx-auto">
					<div class="container-form">
						<div class="mb-3">
							<label for="dateInput" class="form-label">Fecha:</label>
							<input id="dateInput" type="date" class="form-control" />
						</div>
						<div class="mb-3">
							<label for="timeInput" class="form-label">Hora:</label>
							<input id="timeInput" type="time" class="form-control" />
						</div>
						<div class="mb-3">
							<label for="systolicInput" class="form-label">Sistólica:</label>
							<input id="systolicInput" type="number" class="form-control" />
						</div>
						<div class="mb-3">
							<label for="diastolicInput" class="form-label">Diastólica:</label>
							<input id="diastolicInput" type="number" class="form-control" />
						</div>
						<div class="box_btn mt-4">
							<button class="btn btn-success">Cargar</button>
						</div>
					</div>
				</div>
			</div>
			<div class="scroll-container">
				<div class="container">
					<div class="historic">
						<div class="mb-3">
							<h5>Historial de Tensión Arterial</h5>
							<TablePressure :dataTablePressure="bloodPressureData" :isLoading="isLoading" />
						</div>
					</div>
					<div class="graphic">
						<div class="pressure_text">
							<h5>Tensión Arterial:</h5>
							<span>{{ GraphDescription }}</span>
						</div>
						<div class="graph">
							<GraphPressure :isLoading="isLoading" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import GraphPressure from '../Primacy-admin/GraphPressure.vue';
import TablePressure from './TablePressure.vue';

const GraphDescription = '22-enero/11-febrero';

const bloodPressureData = ref([
    {
        datestamp: '2025-02-06',
        timestamp: '09:30:00',
        value1: '120',
		value2: '80'
    },
    {
        datestamp: '2025-02-05',
        timestamp: '09:30:00',
        value1: '190',
		value2: '110'
    },
    {
        datestamp: '2025-02-04',
        timestamp: '10:00:00',
        value1: '140',
		value2: '50'
    },
    {
        datestamp: '2025-02-03',
        timestamp: '08:15:00',
        value1: '185',
		value2: '120'
    },
    {
        datestamp: '2025-02-02',
        timestamp: '11:20:00',
        value1: '100',
		value2: '50'
    },
    {
        datestamp: '2025-02-01',
        timestamp: '09:00:00',
        value1: '150',
		value2: '100'
    }
]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@400;700&display=swap");

h1 {
	font-family: "Montserrat Subrayada";
}

a {
	text-decoration: none;
}

.content__body {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.headers {
	width: 100%;
	height: 150px;
	margin-left: 80px;
	padding: 48px;
	display: flex;
	border: none;
	border-radius: 0 0 38px 0;
	box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
	background-image: url(/src/assets/poryects/assets-Primacy/report_analysis.svg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.headers .profile .title {
	width: 100%;
	margin: auto;
	margin-top: -30px;
	text-align: center;
}

.box-item {
	width: 100%;
	margin-left: 100px;
}

.box-item .item {
	height: auto;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 16px;
}

.container-form {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

.container-form label {
	margin: auto 20px;
}

.container-form input {
	width: 200px;
	margin: auto 20px;
}

.container {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 150px;
	overflow: hidden;
}

.table_scroll-container {
	width: 550px;
	max-height: 350px;
	overflow-y: auto;
	border-radius: 8px;
	box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
}

.graphic {
	width: 600px;
	margin: 0 80px;
}

.graphic .graphic_area {
	padding: 20px;
	border-radius: 16px;
	box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
}

.pressure_text {
	display: flex;
}

.pressure_text h5 {
	margin-right: 10px;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */

@media screen and (max-height: 600px) {
	.scroll-container {
		width: 100%;
		max-height: 350px;
		overflow-y: auto;
	}

	.graphic {
		width: 80%;
		margin: 20px 0;
	}

	.graphic .graphic_area {
		padding: 20px;
	}

	.graph {
		width: 90%;
		overflow: hidden;
	}
}

@media screen and (max-width: 1024px) {
	.content__body {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.headers {
		margin-top: 100px;
		margin-left: 80px;
		padding: 50px;
	}

	.container-form input {
		width: 200px;
		margin: auto 0px;
	}

	.container {
		margin-left: 80px;
		flex-direction: column;
	}

	.graphic {
		width: 90%;
		margin: 20px 0;
	}

	.graphic .graphic_area {
		padding: 20px;
	}
}

@media screen and (max-width: 1024px) {
	.headers {
		margin-top: 0px;
		margin-left: 80px;
		padding: 30px;
	}

	.container-form label,
	.container-form input {
		width: 150px;
		margin: auto 0px;
	}

	.container {
		margin-left: 80px;
		flex-direction: column;
	}

	.graphic {
		width: 90%;
		margin: 20px 0;
	}

	.graphic .graphic_area {
		padding: 20px;
	}
}

@media screen and (max-width: 800px) {
	.headers {
		padding: 50px;
		margin-top: 0px;
		margin-left: 0;
	}

	.headers .profile .title {
		margin-top: -20px;
	}

	.box-item {
		margin-left: 0;
	}

	.container-form {
		margin-top: 0px;
	}

	.container-form label,
	.container-form input {
		width: 150px;
		margin: 10px 0;
	}

	.container-form input {
		border: 2px solid #c3c3c3;
	}

	.btn {
		margin-top: 30px;
	}

	.container {
		flex-direction: column;
		margin-top: 0;
		margin-left: 0;
	}

	.table_scroll-container {
		width: 600px;
		max-height: 150px;
		overflow-y: auto;
		border-radius: 8px;
	}

	.graphic {
		width: 90%;
	}

	.graphic .graphic_area {
		padding: 15px;
	}
}

@media screen and (max-width: 600px) {
	.headers {
		padding: 50px;
		margin-top: 0;
		margin-left: 0;
	}

	.profile {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.headers .profile .title {
		margin-top: -30px;
	}

	.box-item {
		margin-left: 0;
	}

	.container-form {
		margin-top: 0px;
	}

	.container-form label,
	.container-form input {
		width: 100%;
		margin: 5px 0;
	}

	.container-form input {
		border: 2px solid #c3c3c3;
	}

	.btn {
		margin-top: 15px;
	}

	.container {
		flex-direction: column;
		margin-top: 0px;
		margin-left: 0;
	}

	.scroll-container {
		width: 100%;
		max-height: 350px;
		overflow-y: auto;
	}

	.table_scroll-container {
		width: 350px;
		max-height: 150px;
		overflow-y: auto;
		border-radius: 8px;
	}

	.graphic {
		width: 95%;
	}

	.graphic .graphic_area {
		padding: 10px;
	}
}

@media screen and (width: 540px) {
	.headers {
		padding: 50px;
		margin-top: 0px;
		margin-left: 0;
	}

	.headers .profile .title {
		margin-top: -50px;
	}

	.box-item {
		margin-left: 0;
	}

	.container {
		flex-direction: column;
		margin-top: 0px;
		margin-left: 0;
	}

	.container-form {
		width: 100%;
		display: flex;
		margin-top: 0px;
	}

	.container-form label {
		width: 50%;
		font-size: 12px;
	}

	.container-form input {
		width: 100%;
		margin: 5px 0;
	}

	.btn {
		margin-top: 10px;
	}

	.scroll-container {
		max-height: 300px;
		overflow-y: auto;
	}

	.table_scroll-container {
		width: 500px;
		max-height: 150px;
		overflow-y: auto;
		border-radius: 8px;
	}

	.graphic {
		width: 100%;
	}

	.graphic .graphic_area {
		padding: 5px;
	}
}

@media screen and (max-width: 400px) {
	.headers {
		padding: 50px;
		margin-top: 0px;
		margin-left: 0;
	}

	.headers .profile .title {
		margin-top: -45px;
	}

	.box-item {
		margin-left: 0;
	}

	.container {
		flex-direction: column;
		margin-top: 0px;
		margin-left: 0;
	}

	h5 {
		font-size: 16px;
	}

	.container-form {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 0px;
	}

	.container-form label {
		width: 50%;
		font-size: 12px;
	}

	.container-form input {
		width: 100%;
		height: 30px;
		margin: 5px 0;
	}

	.btn {
		margin-top: 5px;
	}

	.scroll-container {
		max-height: 200px;
		overflow-y: auto;
	}

	.table_scroll-container {
		width: 350px;
		max-height: 100px;
		overflow-y: auto;
		border-radius: 8px;
	}

	.graphic {
		width: 100%;
	}

	.graphic span {
		font-size: 14px;
	}

	.graphic .graphic_area {
		padding: 5px;
	}
}

@media screen and (max-width: 344px) {
	.headers {
		padding: 50px;
		margin-top: 0px;
		margin-left: 0;
	}

	.headers .profile .title {
		margin-top: -45px;
	}

	.box-item {
		margin-left: 0;
	}

	.container {
		flex-direction: column;
		margin-top: 0px;
		margin-left: 0;
		margin: auto;
	}

	h5 {
		font-size: 16px;
	}

	.container-form {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 0px;
	}

	.container-form label {
		width: 50%;
		font-size: 12px;
	}

	.container-form input {
		width: 100%;
		height: 30px;
		margin: 5px 0;
	}

	.btn {
		margin-top: 5px;
	}

	.scroll-container {
		max-height: 380px;
		overflow-y: auto;
	}

	.table_scroll-container {
		width: 350px;
		max-height: 150px;
		overflow-y: auto;
		border-radius: 8px;
	}

	.historic h5,
	.pressure_text h5 {
		margin-left: 10px;
	}

	.graphic span {
		font-size: 14px;
	}

	.graphic .graphic_area {
		padding: 5px;
	}
}
</style>
