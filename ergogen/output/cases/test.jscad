function edge_extrude_5_outline_fn(){
    return new CSG.Path2D([[91,-109],[117,-109]]).appendPoint([117,-116]).appendPoint([127,-116]).appendPoint([127,-134]).appendPoint([171.8610371,-134]).appendPoint([171.5637058,-134.8169111]).appendPoint([216.6689516,-151.233878]).appendPoint([226.2455156,-124.9224846]).appendPoint([209,-118.6456302]).appendPoint([209,-23]).appendPoint([191,-23]).appendPoint([191,-18]).appendPoint([173,-18]).appendPoint([173,-12]).appendPoint([135,-12]).appendPoint([135,-18]).appendPoint([117,-18]).appendPoint([117,-23]).appendPoint([91,-23]).appendPoint([91,-109]).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}




                function test_case_fn() {
                    

                // creating part 0 of case test
                let test__part_0 = edge_extrude_5_outline_fn();

                // make sure that rotations are relative
                let test__part_0_bounds = test__part_0.getBounds();
                let test__part_0_x = test__part_0_bounds[0].x + (test__part_0_bounds[1].x - test__part_0_bounds[0].x) / 2
                let test__part_0_y = test__part_0_bounds[0].y + (test__part_0_bounds[1].y - test__part_0_bounds[0].y) / 2
                test__part_0 = translate([-test__part_0_x, -test__part_0_y, 0], test__part_0);
                test__part_0 = rotate([0,0,0], test__part_0);
                test__part_0 = translate([test__part_0_x, test__part_0_y, 0], test__part_0);

                test__part_0 = translate([0,0,0], test__part_0);
                let result = test__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return test_case_fn();
            }

        