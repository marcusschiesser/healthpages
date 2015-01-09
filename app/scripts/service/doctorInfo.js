'use strict';

angular.module('healthpagesApp').factory('DoctorInfoService', function () {
    return {
        'types' : {
            'allergist': 'Allergist',
            'cardiologist': 'Cardiologist',
            'dentist': 'Dentist',
            'dermatologist': 'Dermatologist',
            'emergency_doctors': 'Emergency Doctors',
            'endocrinologist': 'Endocrinologist',
            'ent_specialist ENT': 'Specialist',
            'family_practitioner': 'Family Practitioner',
            'gastroenterologist': 'Gastroenterologist',
            'gynecologist': 'Gynecologist',
            'general_psychiatrist': 'General Psychiatrist',
            'internists': 'Internists',
            'neonatologist': 'Neonatologist',
            'nephrologists': 'Nephrologists',
            'oncologist': 'Oncologist',
            'pediatrician': 'Pediatrician',
            'physiatrist': 'Physiatrist',
            'podiatrists': 'Podiatrists',
            'psychiatrists': 'Psychiatrists',
            'pulmonologist': 'Pulmonologist',
            'radiologists': 'Radiologists',
            'reproductive_endocrinologist': 'Reproductive Endocrinologist',
            'rheumatologist': 'Rheumatologist',
            'surgeon': 'Surgeon',
            'thoracic_oncologist': 'Thoracic Oncologist',
            'urologist': 'Urologist',
            'veterinarian': 'Veterinarian'
        }
    };
});
