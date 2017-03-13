class Unit < ApplicationRecord
    def self.unit_conversion(id, units)
        # If the unit doesn't already match the activity's stored units, apply conversion
        activity_units = Activity.find(id).units
        if (units != activity_units and activity_units.present?)
            return Unit.conversion_factor_SI(units) * Units.conversion_factor_from_SI(activity_units)
        else
            return 1.0
        end
    end
    
    def self.conversion_factor_SI(units)
        return Unit.where("unit = ?", units).first.conversion_to_si
    end
    
    def self.conversion_factor_from_SI(units)
        return 1.0/Unit.where("unit = ?", units).first.conversion_to_si
    end
end
